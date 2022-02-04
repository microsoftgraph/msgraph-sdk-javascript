interface Buffer {}
interface NodeStream{
    readable: boolean;
         readableLength: number;
        read(size?: number): any;
       on(event: string | symbol, listener: (...args: any[]) => void): this;
}
