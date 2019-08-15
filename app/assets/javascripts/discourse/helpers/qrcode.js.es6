import "QRious" from "qrious";

export function genQrcode(eleId, val) {
  var qr = new QRious({
    element: document.getElementById(eleId),
    value: val
  });
}

// https://github.com/neocotic/qrious

// https://www.w3xue.com/jsjq/emberjs/emberjstoolhelper.html