export const KOYO_LIST = 'https://tassets.koyo.finance/koyo-default.tokenlist.json';

export const UNSUPPORTED_LIST_URLS: string[] = [];

export const DEFAULT_LIST_OF_LISTS_TO_DISPLAY: string[] = [KOYO_LIST];

export const DEFAULT_LIST_OF_LISTS: string[] = [...DEFAULT_LIST_OF_LISTS_TO_DISPLAY, ...UNSUPPORTED_LIST_URLS];

export const DEFAULT_ACTIVE_LIST_URLS: string[] = [KOYO_LIST];
