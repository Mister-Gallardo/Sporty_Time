declare global {
  interface Window {
    YooMoneyCheckoutWidget: any;
  }
}

export const renderCheckoutWidget = (token: string) => {
  // const checkout = new window.YooMoneyCheckoutWidget({
  //   confirmation_token: token, //Token that must be obtained from YooMoney before the payment process
  //   customization: {
  //     modal: true,
  //   },
  //   error_callback: (error: any) => {
  //     console.log('widget error: ', error);
  //   },
  // });

  // checkout.on('complete', () => {
  //   checkout.destroy();
  // });

  // //Display of payment form in the container
  // checkout.render();

  const checkout = new window.YooMoneyCheckoutWidget({
    confirmation_token: token, //Token that must be obtained from YooMoney before the payment process
    error_callback: function (error: any) {
      console.log('widget error: ', error);
    },
  });

  //Отображение платежной формы в контейнере
  checkout.render('payment-form').then(() => console.log('widget loaded'));
};
