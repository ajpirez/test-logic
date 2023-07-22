import {Worker} from "worker_threads";
import {binarySearch} from "./exercise8";


export const mapWithBinarySearch = async (domain: number[], values: number[], maxWorkers = 1): Promise<boolean[]> => {
    const result: boolean[] = [];

    if (maxWorkers > 1 && values.length > 1) {
        const workerCount = Math.min(maxWorkers, values.length);
        const chunkSize = Math.ceil(values.length / workerCount);

        for (let i = 0; i < workerCount; i++) {
            const {start, end} = {start: i * chunkSize, end: (i + 1) * chunkSize};

            const worker = new Worker('./dist/worker.js', {
                workerData: {domain, values: values.slice(start, end)},
            });
            const promise = new Promise<boolean[]>((resolve) => {
                worker.on('message', (message) => {
                    resolve(message);
                    worker.terminate();
                });
            });
            result.push(...await promise);
        }
    } else {

        for (let i = 0; i < values.length; i++) {
            result.push(binarySearch(domain, values[i]));
        }
    }

    return result;
};