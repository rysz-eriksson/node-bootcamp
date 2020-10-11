const chalk = require('chalk');
const yargs = require('yargs');
const { listNotes, addNote, removeNote, readNote } = require('./notes');

yargs.version('1.1.0')

// create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note\'s content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        addNote(argv.title, argv.body)
    }
})

// remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        removeNote(argv.title)
    }
})

// list command

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function () {
        listNotes()
    }
})

// read command

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        readNote(argv.title)
    }
})


yargs.parse()
// console.log(yargs.argv)