import { useEffect, useState } from 'react';

import { CheckCircle } from '@phosphor-icons/react';

import ProgressIndicator from '#/components/progressIndicator';
import Navbar from '#/components/navbar';
import UploadImage from '#/components/uploadImage';
import { ProgressStepStatus } from '#/components/progressIndicator/types';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useCertificate } from '#/context/CertificationContext';
import { paths } from '#/routes/paths';
import UploadInput from '#/components/uploadInput';
import Modal from '#/components/pictureModal'; // Ajusta la ruta según la ubicación real de tu Modal

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex justify-space-around items-center md:text-xl text-sm gap-2 h-12">
    <div className="flex justify-center items-center rounded-full bg-green-check text-white w-5 h-5 flex-shrink-0">
      <img className="w-3 h-3" src="assets/icon/check-icon.svg" alt="" />
    </div>
    <p>{text}</p>
  </div>
);

const UploadCertificate = () => {
  const navigate = useNavigate();

  // TODO: Replace with context useState
  const { setFile, setCertificateImage } = useCertificate();
  const [showModal, setShowModal] = useState(true);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0]!);
    setCertificateImage(URL.createObjectURL(e.target.files?.[0]!));

    navigate(paths.verifyCertificate);
  };

  const closeModal = () => {
    // Cerrar el modal y navegar a la siguiente página
    setShowModal(false);
  };
  return (
    <>
      <Navbar routerLink={paths.home} />
      {showModal && <Modal onClose={closeModal} />}
      <main className="container mx-auto p-4 flex flex-col gap-[30px] max-w-[52.5rem]">
        <ProgressIndicator
          steps={[
            ProgressStepStatus.Active,
            ProgressStepStatus.Pending,
            ProgressStepStatus.Pending,
          ]}
        />
        <h1 className="text-neutral-700 text-xl font-medium text-center">
          Cargar imagen
        </h1>
        <div className="flex  px-10">
          <p className=" self-center pr-6 text-neutral-600 text-base">
            Usá la cámara para subir <b>el certificado del fiscal</b>, o cargala
            desde la galería.
          </p>
          <button
            className="flex self-center card p-6 sm:p-4 w-[200px] cursor-pointer rounded-2xl shadow-md  bg-slate-50 transition-transform transform hover:scale-110 hover:bg-slate-100"
            onClick={() => setShowModal(true)}
          >
            <span className="hidden sm:block">¿Cómo debe ser la imagen?</span>
            <span className="visible sm:hidden">¿Ejemplo?</span>
          </button>
        </div>
        <UploadInput
          id="largeCertificateInput"
          size="lg"
          onChange={handleImageUpload}
        />
        <ul className="flex flex-col gap-[15px]">
          <li className="flex flex-row gap-[8px] text-left">
            <CheckCircle className="text-green" size={24} />
            <span className="text-neutral-600 text-sm flex-1">
              Buscá un lugar con buena luz.
            </span>
          </li>
          <li className="flex flex-row gap-[8px] text-left">
            <CheckCircle className="text-green" size={24} />
            <span className="text-neutral-600 text-sm flex-1">
              Asegurate de que se vean todos los datos.
            </span>
          </li>
          <li className="flex flex-row gap-[8px] text-left">
            <CheckCircle className="text-green" size={24} />
            <span className="text-neutral-600 text-sm flex-1">
              Asegurate que el certificado esté firmado por el presidente de tu
              mesa.
            </span>
          </li>
        </ul>
        <UploadInput
          id="buttonCertificateInput"
          size="md"
          onChange={handleImageUpload}
        />
      </main>
    </>
  );
};

export default UploadCertificate;
