#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

// Main description
program
  .name('config-storage-cli')
  .description('CLI util to store key-value pairs in your computer')
  .version('0.0.1');

// Save command
program
  .command('save')
  .description('Save a key-value pair in your computer')
  .argument('<key>', 'Key to identify your key-pair value')
  .argument('<value>', 'Value to be stored')

// Get command
program
  .command('get')
  .description('Get a stored value using a key')
  .argument('<key>', 'Key to identify your key-pair value')
  .option('-c, --c', 'Copy value to the clipboard')

// Delete command
program
  .command('delete')
  .description('Delete a stored value using a key')
  .argument('<key>', 'Key to identify your key-pair value')

// Configure help
program.configureHelp({
  sortSubcommands: true,
  subcommandTerm: (cmd) => cmd.name()
});

program.parse();
