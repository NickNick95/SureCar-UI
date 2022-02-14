import { Injectable } from '@angular/core';
import * as Forge from 'node-forge';

@Injectable()
export class CryptoService {

    private publicKey: string = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGbu1Wk+j/wLKRf5tu4CsSMfnq
    Wz7Xj1iA1WZ40ShJ8FxDw4eFDVD3KNwxX+TUjE8+c1WstYKd2v3i6hIHbx4zEJKg
    PmOMgta8DhXIp2DPKWnLETcMD1QPUNVNkCImOWLFX4KxZ8aAG3gQyL4STjdzm68z
    DmCwybOqi8GLVLwTWQIDAQAB
    -----END PUBLIC KEY-----`;

    constructor() { }

    public encrypt(valueToEncrypt: string): string {
        const rsa = Forge.pki.publicKeyFromPem(this.publicKey);
        return window.btoa(rsa.encrypt(valueToEncrypt.toString()));
    }
}
