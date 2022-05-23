# PING-Tools
The purpose of this tool is to send a request to a website or API. If the site exists, it sends you back a "true" request, in the opposite case, it sends back a "false" request. A configuration system is integrated for an optimal use.  

# Languages and tools
The language used is [Javascript](https://www.javascript.com/). <br>
The library used is [axios](https://www.npmjs.com/package/axios). <br>
The IDE used is [WebStorm](https://www.jetbrains.com/).

# Installation

To install the tool, you need to write the following command in the terminal:

```
npm init
```

Then, you need to install the dependencies:

```
npm install
```

# Usage
For use this tool, you can edit the fils `config.json` and modify for you needs. <br>
If you enter 0 in the field DELAY in config.json, the tool will send the request every second.
The website or API can be configured in the field URL. <br>
The URL just can start with http:// or https://.

After that, the tool return to you the response of the request. <br>
If error was found, the tool return the error.  And stop the process.

# Configuration example
```json
{
    "PING": {
        "URL": "https://google.com",
        "DELAY": "1000",
        "REPING-AFTER-ERROR": false,
        "REPING-AFTER-SUCCESS": true
    }
}
```

# License
This tool is licensed under the [MIT license]() <br>
Developed by [Mathis Audureau](https://github.com/mathisaudureau) <br>
> Please dont use this tool for DDoS !
