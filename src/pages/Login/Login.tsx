import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import LoginComp from '../../components/LoginComp/LoginComp';
import './Login.css';


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <LoginComp />
      </IonContent>
    </IonPage>
  );
};

export default Login;