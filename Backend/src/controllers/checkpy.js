import { PythonShell } from 'python-shell';

// Define options for PythonShell
let options = {
    mode: 'text',
    scriptPath: 'C:/Users/renuk/OneDrive/Desktop/Farm/Backend/src/controllers',
    args: ['raghav', 12]
};

// Run the Python script
PythonShell.run('test.py', options, (err, results) => {
    if (err) {
        console.error('Error running Python script:', err);
    } else {
        console.log('Python script output:', results);
    }
});
