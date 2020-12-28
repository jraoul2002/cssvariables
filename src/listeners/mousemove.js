'use strict';

import { handleUpdate } from '../handlers/handleUpdate.js';

const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
