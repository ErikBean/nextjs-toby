import PageTitle from '../src/PageTitle';
import { sizes } from '../src/sizes';
const imageUrls = [
  'https://media1.tenor.com/images/c3a40ce7dfb68b642dc42e7bd597951e/tenor.gif?itemid=10400593',
  'https://www.woodstockrunners.org.au/wp-content/uploads/2012/09/cute-dog-food-funny-pasta-tongue-Favim.com-43335.jpg',
  'https://static.boredpanda.com/blog/wp-content/uploads/2018/07/funny-hungry-dogs-begging-food-fb56-png__700.jpg',
  'https://www.dfordog.co.uk/user/images/funnies/funny-dogs-and-food-06.jpg',
  'https://dogbreedersguide.com/wp-content/uploads/2014/12/puppy-fighting-with-food-jar-funny-dog-picture.jpg',
  'https://external-preview.redd.it/R8dwBaFE7blxrKuFllrLO2QZ9GDhG_b3y3w_FrxOsrA.jpg?auto=webp&s=85592cc23ea41021e3de9630fff804bad6f407e3',
];
export default function Food() {
  return (
    <>
      <PageTitle title="I Like Food!" />
      <div className="content-container">
        <p className="article">Kibble again? Oh boy!</p>
        <img className="dog-pasta" src="dog-pasta-tongue.jpg" />
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .content-container {
          display: flex;
        }
        .dog-pasta {
          width: 50%;
          animation: fadeIn ease 2s;
        }
        .article {
          width: 50%;
          font-size: 24px;
          padding: 20px;
          font-family: Times, serif;
          box-sizing: border-box;
        }

        @media (max-width: ${sizes.mobileMax}) {
          .content-container {
            flex-direction: column;
          }
          .dog-pasta {
            order: 0;
            width: 100%;
          }
          .article {
            order: 1;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
