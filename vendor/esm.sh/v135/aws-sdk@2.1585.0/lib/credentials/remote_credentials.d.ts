import {Credentials} from '../credentials.d.ts';
export class RemoteCredentials extends Credentials {
        /**
         * Represents credentials received.
         * @param {object} options - Override the default (1s) timeout period.
         */
        constructor(options?: RemoteCredentialsOptions);
    }
    interface RemoteCredentialsOptions {
        httpOptions?: {
            /**
             * Timeout in milliseconds.
             */
            timeout?: number
        }
        maxRetries?: number
    }
