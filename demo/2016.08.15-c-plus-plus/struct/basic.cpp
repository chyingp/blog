#include <iostream>
using namespace std;

int main () {
    struct Book {
        string title;
        string author;
        int id;
    };

    Book book = {"降龙十八掌", "chyingp", 10086};
    cout << "标题：" << book.title << endl;

    book.title = "九阴真经"; 
    cout << "标题：" << book.title << endl;

    // 标题：降龙十八掌
    // 标题：九阴真经    

    return 0;
}
