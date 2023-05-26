# config-storage-cli
A CLI ve to store persistent key-pairs values on your computer.

This package is based on https://www.npmjs.com/package/config-storage.

![npm](https://img.shields.io/npm/l/config-storage-cli?color=blue)
![npm](https://img.shields.io/npm/v/config-storage-cli?color=blue)

## Installation
```bash
npm i -g config-storage-cli
```

## Usage
You can use the command `config-storage` to see the all available commands.
```text
$ config-storage

Usage: config-storage [options] [command]

CLI util to store key-value pairs in your computer

Options:
  -V, --version  output the version number
  -h, --help     display help for command

Commands:
  save           Save a key-value pair in your computer
  get            Get a stored value using a key
  delete         Delete a stored value using a key
  clean          Clean all your stored data
  help           display help for command
```

### :arrow_right: `save` command
```text
config-storage save <key> <value>
```

```text
$ config-storage save hello world

The 'hello' key was stored succesfully.
```

### :arrow_right: `get` command
```text
config-storage get <key>
```

```text
$ config-storage get hello

world
```

```text
$ config-storage get goodbye

The key 'goodbye' does not exist.
```

### :arrow_right: `delete` command
```text
$ config-storage delete hello

The 'hello' was deleted succesfully.
```

```text
$ config-storage delete goodbye

The key 'goodbye' does not exist.
```

### :arrow_right: `list` command
```text
$ config-storage list

Stored Keys:
token_one
token_two
username_web_one
username_web_two
```

### :arrow_right: `clean` command
```text
$ config-storage clean

All of your data was deleted succesfully.
```

## License
[MIT](https://github.com/vcgtz/config-storage-cli/blob/main/LICENSE)
