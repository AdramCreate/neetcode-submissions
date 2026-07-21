class DynamicArray {
    private capacity = 0
    private arr = []
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.arr[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.arr[i] = n
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if((this.getSize()+1) > this.getCapacity()) {
            this.resize()
        }

        this.arr.push(n)
    }

    /**
     * @returns {number}
     */
    popback(): number {
        return this.arr.pop()
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity = this.capacity * 2
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.arr.length
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity
    }
}
