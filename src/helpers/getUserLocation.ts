import { Geolocation } from '@capacitor/geolocation';

// set location loading progress and set user's lat and lng (if granted)
export const getUserLocation = async (
  setIsLoading: (val: boolean) => void,
  setValue: any,
) => {
  setIsLoading(true);
  try {
    const { location } = await Geolocation.checkPermissions();

    const { latitude, longitude } = (await Geolocation.getCurrentPosition())
      .coords;

    if (location === 'granted' || location === 'prompt') {
      setValue('lat', latitude);
      setValue('long', longitude);
      setValue('selectedLocation', 'Рядом со мной');
    }

    if (location === 'denied') {
      setValue('selectedLocation', 'Выбрать локацию');
    }
  } catch (error: any) {
    if (error.message === 'User denied Geolocation') {
      alert(
        'Что бы найти ближайшие к вам клубы необходима информация о вашей геолокации. В настройках вашего девайса вы можете разрешить приложению использовать данные о вашем местоположении',
      );
      setValue('selectedLocation', 'Выбрать локацию');
    }
  } finally {
    setIsLoading(false);
  }
};
