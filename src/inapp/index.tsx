import { Component, h, render, Fragment } from 'preact';

import { Context, PUSH_BASE_URL, getInstallId, getUserId } from '../core';
import { authedFetch } from '../core/utils';
import { createPortal } from 'preact/compat';
import InAppDialog from './InAppDialog';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import { MessageType } from '../core/push';
import { set, get } from '../core/storage';

// v1/users/{userIdentifier}/messages
export default class InAppMessageManager {
    private installId?: string;
    private isPolling: boolean = false;
    private currentMessage: any;
    private readonly container: RootFrameContainer;

    constructor(private context: Context, rootFrame: RootFrame) {
        this.container = rootFrame.createContainer('inapp');
        this.startPollForMessages();
    }

    private url = () => `${PUSH_BASE_URL}/v1/users/${this.installId}/messages`;

    private async startPollForMessages() {
        this.installId = await getUserId();

        setInterval(this.pollForMessages, 1000);
    }

    private hasInAppBeenHandled = async (id: number) =>
        !!(await get(`inapp_${id}`));

    private pollForMessages = async () => {
        if (this.isPolling || this.currentMessage) {
            return;
        }

        this.isPolling = true;

        try {
            const messageData = await authedFetch(
                this.context,
                this.url()
            ).then(r => r.json());

            if (messageData && messageData.length) {
                for (let i = 0; i < messageData.length; i++) {
                    let msg = messageData[i];
                    if (!(await this.hasInAppBeenHandled(msg.id))) {
                        this.currentMessage = msg;
                    }
                }

                this.renderInApp();
            }
        } catch (e) {
            console.error(`Unable to fetch messages: ${e.message}`);
        } finally {
            this.isPolling = false;
        }
    };

    private onMessageAction = async (action: any) => {
        console.info(
            `InAppManager handling inapp message action: ${JSON.stringify(
                action
            )}`
        );
        switch (action.type) {
            case 'closeMessage':
                await set(`inapp_${this.currentMessage.id}`, true);
                this.currentMessage = null;
                this.renderInApp();
                break;
        }
    };

    private renderInApp() {
        render(
            createPortal(
                <Fragment>
                    {this.currentMessage ? (
                        <InAppDialog
                            messagePart={{
                                type: MessageType.INAPP,
                                data: this.currentMessage.content
                            }}
                            onMessageAction={this.onMessageAction}
                        />
                    ) : null}
                </Fragment>,
                document.body
            ),
            this.container.element
        );
    }
}
