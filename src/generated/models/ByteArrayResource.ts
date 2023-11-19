/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { InputStream } from './InputStream';

export type ByteArrayResource = {
    byte_array?: string;
    description?: string;
    file?: Blob;
    filename?: string;
    input_stream?: InputStream;
    open?: boolean;
    readable?: boolean;
    uri?: string;
    url?: string;
};

