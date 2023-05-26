# Config Storage CLI
![npm](https://img.shields.io/npm/l/config-storage-cli?color=blue)
![npm](https://img.shields.io/npm/v/config-storage-cli?color=blue)

The **Config Storage CLI** is a command-line tool that allows you to store and retrieve values locally on your computer. It provides a simple and convenient way to manage key-value pairs, making it ideal for storing and accessing configuration settings, temporary data, and other types of information that you need to persist locally.

**Features:**
- Easy-to-use: The **Config Storage CLI** offers a user-friendly interface, allowing you to store and retrieve values with straightforward commands.
- Key-Value Storage: It enables you to store data using key-value pairs, making it flexible for various use cases.
- Secure Storage: Your values are stored locally on your computer, ensuring data privacy and security.

Whether you need a convenient way to store configuration settings, API keys, or any other type of data locally, **Config Storage CLI** simplifies the process and provides a reliable solution for managing your stored values.

This package is based on https://www.npmjs.com/package/config-storage.

## Installation
```bash
npm i -g config-storage-cli
```

## Usage
**Note:** You can also use `csc` instead of `config-storage`.

You can use the command `config-storage` to see all the available commands.
```text
$ config-storage

Usage: config-storage [options] [command]

CLI util to store key-value pairs in your computer

Options:
  -V, --version  output the version number
  -h, --help     display help for command

Commands:
  set            Set a key-value pair in your computer
  get            Get a stored value using a key
  delete         Delete a stored value using a key
  clean          Clean all your stored data
  list           List all your stored keys
  help           display help for command
```

### :arrow_right: `set` command
```text
config-storage set <key> <value>
```

```text
$ config-storage set hello world

The hello key was stored succesfully.
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

The goodbye key does not exist.
```

You can use the option `-c` to copy the stored value into your clipboard. 
```text
$ config-storage get -c hello

world
```

### :arrow_right: `delete` command
```text
$ config-storage delete hello

? Are you sure you want to delete your hello key? (y/N) y
The hello key was deleted succesfully.
```

```text
$ config-storage delete goodbye

The goodbye key does not exist.
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

? Are you sure you want to delete all your stored keys? Yes
All of your data was deleted succesfully.
```

## License
[MIT](https://github.com/vcgtz/config-storage-cli/blob/main/LICENSE)
