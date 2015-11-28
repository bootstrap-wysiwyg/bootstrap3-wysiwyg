
/**
* Vietnamese translation for bootstrap3-wysihtml5
*/
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define('bootstrap.wysihtml5.zh-CN', ['jquery', 'bootstrap.wysihtml5'], factory);
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function($){
	$.fn.wysihtml5.locale["vi-VN"] = {
		font_styles: {
			normal: "Bình thường",
			h1: "Tiêu đề 1",
			h2: "Tiêu đề 2",
			h3: "Tiêu đề 3",
			h3: "Tiêu đề 4",
			h3: "Tiêu đề 5",
			h3: "Tiêu đề 6"
		},
		emphasis: {
			bold: "Đậm",
			italic: "Nghiêng",
			underline: "Gạch dưới"
		},
		lists: {
			unordered: "Không thứ tự",
			ordered: "Thứ tự",
			outdent: "Thụt ra",
			indent: "Thụt vào"
		},
		link: {
			insert: "Chèn liên kết",
			cancel: "Huỷ"
		},
		image: {
			insert: "Chèn ảnh",
			cancel: "Huỷ"
		},
		html: {
			edit: "Sửa"
		},
		colours: {
			black: "Đen",
			silver: "Bạc",
			gray: "Xám",
			maroon: "Nâu Maroon",
			red: "Đỏ",
			purple: "Tím Purple",
			green: "Xanh lá",
			olive: "Xanh Olive",
			navy: "Xanh Navy",
			blue: "Xanh dương",
			orange: "Cam"
		}
	};
}));
