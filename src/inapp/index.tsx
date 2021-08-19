import { Component, h, render, Fragment } from 'preact';

import { Context, PUSH_BASE_URL, getInstallId, getUserId } from '../core';
import { authedFetch } from '../core/utils';
import { createPortal } from 'preact/compat';
import InAppDialog from './InAppDialog';
import RootFrame, { RootFrameContainer } from '../core/root-frame';
import { MessageType } from '../core/push';

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

    private async startPollForMessages() {
        this.installId = await getUserId();

        setInterval(this.pollForMessages, 1000);
    }

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
                this.currentMessage = messageData[0];
                this.renderInApp();
            }
        } catch (e) {
            console.error(`Unable to fetch messages: ${e.message}`);
        } finally {
            this.isPolling = false;
        }
    };

    private url = () => `${PUSH_BASE_URL}/v1/users/${this.installId}/messages`;

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
                            onMessageAction={action => {
                                console.info(
                                    `InAppManager handling inapp message action: ${JSON.stringify(
                                        action
                                    )}`
                                );
                                switch (action.type) {
                                    case 'closeMessage':
                                        this.currentMessage = null;
                                        this.renderInApp();
                                        break;
                                }
                            }}
                        />
                    ) : null}
                </Fragment>,
                document.body
            ),
            this.container.element
        );
    }
}
