// import $ from "jquery";

export default class Modal {
	
	// constructor(selector) {
	// 	this.$el = $(selector);
	// 	this.$parent = this.$el.parent();
	// 	this.$el.addClass('open');
	// 	this.$parent.addClass('modal-open');
	// }
	
	close() {
		this.$parent.removeClass('modal-open');
		this.$el.removeClass('open');
	}
}

