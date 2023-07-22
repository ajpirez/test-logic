import { parentPort, workerData } from "worker_threads";
import { binarySearch } from "./exercise8";


const { domain, values } = workerData;

const result = values.map((value:any) => binarySearch(domain, value));
parentPort!.postMessage(result);
