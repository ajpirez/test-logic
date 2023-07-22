import express, {Request, Response} from 'express';
import {mapWithBinarySearch} from './exerciseExtra'

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('The sedulous hyena ate the antelope!');
});


app.get('/binary', (req: Request, res: Response) => {
    //La búsqueda binaria es más eficiente que la búsqueda secuencial cuando
    // la lista de búsqueda es muy grande. La complejidad de la búsqueda binaria
    // es O(log n), mientras que la complejidad de la búsqueda secuencial es O(n).
    //Como la lista de búsqueda en este caso es la lista de dominio, que se supone es muy grande,
    // la búsqueda binaria es mucho más eficiente que la búsqueda secuencial.
    //En cuanto al procesamiento en paralelo, esta técnica puede mejorar el rendimiento en escenarios donde
    // la lista de valores es muy grande y se desea procesar las peticiones de forma más rápida.
    // La implementación utiliza Worker threads de Node.js para paralelizar el procesamiento en diferentes hilos de ejecución.
    // El número máximo de workers se puede configurar para ajustarse a las necesidades del usuario.
    //La complejidad computacional de esta solución depende del tamaño de la lista de valores y del número de workers utilizados.
    //El procesamiento en paralelo puede mejorar significativamente el rendimiento en escenarios donde la lista de valores es grande y el procesamiento es intensivo
    const domain = [1, 2, 3, 4, 54,543,654,6,456,345,23,4,65,4,65,745,78,98,56,4,62,3454,325,43,656,86,907,6,6435,43,543,65,8,679,65,45,4,54];
    const values = [2, 4, 6, 8,1,2,3,4,5,6,7,8,45,5,45,4,24,325,43,67,87658,76,8976,8976,876,8,84,64,354,35,34];
    const maxWorkers = 10
    return mapWithBinarySearch(domain, values, maxWorkers).then((result) => {
        console.log(result);
        res.json({
            msg: true
        })
    }).catch((error) => {
        console.error(error);
    });
})

app.listen(port, (err?: Error) => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});

