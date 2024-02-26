declare global {
  interface Window {
    YooMoneyCheckoutWidget: any;
  }
}

export const renderCheckoutWidget = (token: string) => {
  const checkout = new window.YooMoneyCheckoutWidget({
    confirmation_token: token, //Token that must be obtained from YooMoney before the payment process
    // return_url: 'https://dev.sportytime.ru/book-court/18', // navigate after suc. payment
    customization: {
      modal: true,
    },
    error_callback: (error: any) => {
      console.log('widget error: ', error);
      //catch init errors
    },
  });

  checkout.on('complete', (e: any) => {
    //Code to be run after payment.
    console.log(e);
    console.log('test');
    //Deletion of an initialized widget
    checkout.destroy();
  });

  //   checkout.on('modal_close', () => {
  //     //Сode to be run in case the pop-up window gets closed.
  //   });

  //Display of payment form in the container
  checkout.render();
};
