import logoURFN from '../../assets/logoUFRN.png'
import logoECT from '../../assets/logoECT.png'

export function ImagensContainer() {
  return (
    <div class="imagesContainer">
      <img src={logoURFN} alt="Logo UFRN" class="logoUFRN" />
      <img src={logoECT} alt="Logo ECT" class="logoECT" />
    </div>
  );
}
