#include <iostream>
using namespace std;

struct Book {
    string title;
    string author;
    int id;
};

void initBookWithReference (Book &book) {
    book.title = "降龙十八掌";
}

void initBookWithoutReference (Book book) {
    book.title = "九阴真经";
}

int main () {

    Book book;
    
    initBookWithReference(book);    
    cout << "标题：" << book.title << endl;
    // 标题：降龙十八掌

    initBookWithoutReference(book);
    cout << "标题：" << book.title << endl;
    //标题：降龙十八掌

    return 0;
}
