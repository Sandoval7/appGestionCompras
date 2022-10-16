import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import RegisterComp from '../../components/RegisterComp/RegisterComp';
import LoginComp from '../../components/LoginComp';
import './Register.css'



const Register: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <RegisterComp />
      </IonContent>
    </IonPage>
  );
};

export default Register;