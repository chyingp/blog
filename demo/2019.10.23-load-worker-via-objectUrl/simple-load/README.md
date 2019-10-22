在当前目录下运行 `python -m SimpleHTTPServer 8000`，并打开浏览器访问 http://127.0.0.1:8000

打开控制台，看到如下输出：

```
[main] Main is initialized.
[worker] Worker is initialized.
[worker] Got num from main thread: 2.
[main] Got result from worker thread: 1.
```
