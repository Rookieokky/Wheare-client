var picUploader = function() {

	var s3URI = encodeURI("I need the server url from you hilal !!"),
		policyBase64 = " add policyBase64 ",
		signature = "something"
		awsKey = 'server key',
		acl = "something";

		function upload(imageURI, fileName) {

			var deferred = $.Deferred(),
				ft = new FileTransfer(),
				options = new FileUploadOptions();
		}

			options.fileKey = "file";
			options.fileName = fileName;
			options.mimeType = "image/jpeg";
			options.chunkedMode = false;
			options.parameter = {
				"key" : fileName,
				"ServerkeyId" : serverKey,
				"acl" : acl,
				"policy" : policyBase64,
				"signature" : signature,
				"content-type" : "image/jpeg"
			};

			ft.upload(imageURI, picURI,
				function (e) {
					deferred.resolve(e);
				},
				function (e) {
					deferred.reject(e);
				},options);

			return deferred.promise();

		}

		return {
			upload: upload
		}

}());





}