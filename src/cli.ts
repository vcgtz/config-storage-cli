#!/usr/bin/env node

import { Command } from 'commander';
import ConfigurationStorage from 'config-storage';

const storageNameFolder = 'config_storage_cli';

const initCommander = (config: ConfigurationStorage) => {
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
    .action(async (key: string, value: string) => {
      try {
        if (await config.exists(key)) {
          console.log('The existent value will be overwritten.');
        }

        await config.set(key, value);

        console.log(`The '${key}' was stored succesfully.`);
      } catch (err: any) {
        console.log(`An error has happend: ${err.toString()}`);
      }
    });

  // Get command
  program
    .command('get')
    .description('Get a stored value using a key')
    .argument('<key>', 'Key to identify your key-pair value')
    .option('-c, --c', 'Copy value to the clipboard')
    .action(async (key: string) => {
      try {
        if (!(await config.exists(key))) {
          console.log(`The key '${key}' does not exist.`);
          return;
        }

        const value = await config.get(key);

        console.log(value);
      } catch (err: any) {
        console.log(`An error has happend: ${err.toString()}`);
      }
    });

  // Delete command
  program
    .command('delete')
    .description('Delete a stored value using a key')
    .argument('<key>', 'Key to identify your key-pair value');

  // Clean command
  program
    .command('clean')
    .description('Clean all your stored data');

  // Configure help
  program.configureHelp({
    sortSubcommands: false,
    subcommandTerm: (cmd) => cmd.name()
  });

  program.parse(process.argv);
};

const main = async () => {
  const config = await ConfigurationStorage.getStorage(storageNameFolder);

  initCommander(config);
};

main();
