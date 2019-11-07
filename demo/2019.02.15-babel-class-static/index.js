class BasePage {
	static hello () {
		console.log('hello BasePage.');
	}
}

class Page extends BasePage {

}

Page.hello();