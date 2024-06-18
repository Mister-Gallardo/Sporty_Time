declare global {
  interface Window {
    YooMoneyCheckoutWidget: any;
  }
}

let script = document.querySelector(
  'script[src="https://yookassa.ru/checkout-widget/v1/checkout-widget.js"]',
) as HTMLScriptElement;

if (!script) {
  script = document.createElement('script');
  script.type = 'application/javascript';
  script.src = 'https://yookassa.ru/checkout-widget/v1/checkout-widget.js';
  script.async = true;
  document.body.appendChild(script);
}

export const renderCheckoutWidget = (token: string, onSuccess?: () => void) => {
  const checkout = new window.YooMoneyCheckoutWidget({
    confirmation_token: token, //Token that must be obtained from YooMoney before the payment process
    error_callback: function (error: any) {
      console.log('widget error: ', error);
    },
  });

  checkout.on('success', () => {
    if (onSuccess) onSuccess();
  });

  checkout.on('complete', () => {
    checkout.destroy();
  });
  checkout.render('payment-form').then(() => {
    document.getElementById('payment-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  });
};
