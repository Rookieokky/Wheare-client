(function() {

	var $image = $('image', '.scroller'),

	getPhoto = function(e) {
		var options = {
			quality: 50,
			targetWidth: 1000,
			targetHeight: 1000,
			destinationType: Camera.destinationType.FILE_URI,
			encodingType: Camera.encodingType.JPEG,
			sourceType: Camera.PictureSourceType.CAMERA,
		};

		navigator.Camera.getPicture(
				function (imageURI) {
					$img.attr('src', imageURI);
					var fileName = " " + (new Date()).getTime() + " .jpg";
					picUploader.upload(imageURI, fileName)
						.done(function(){
							alert("Picture Saved");
						})
						.fail(function(){
							alert("Failed to Upload");
						});
	},
	function (message) {

	}, options);

	return false;

	};

	$('.camera-btn').on('click', takePicture);

}());
