
/*

Concurrency                 Concurrency + parallelism

(Single-Core CPU)           (Multi-Core CPU)

 ___                         ___ ___
|th1|                       |th1|th2|
|   |                       |   |___|
|___|___                    |   |___
    |th2|                   |___|th2|
 ___|___|                    ___|___|
|th1|                       |th1|
|___|___                    |   |___
    |th2|                   |   |th2|

*/

import {spawn} from 'child_process'

spawn('git', ['stuff'])

console.log('spawn', spawn('git', ['stuff']))

