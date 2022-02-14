export class CacheItem {
    public key: string;
    public value: string;

    constructor(item: CacheItem) {
        this.key = item.key;
        this.value = item.value;
    }
}