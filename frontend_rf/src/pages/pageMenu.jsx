import ViewDefault from "components/ViewDefault/ViewDefault";
import React from "react";
import { mainColors } from "../styles/mainColors";
import LayoutGrid from "components/LayoutGrid/LayoutGrid";

function PageMenu() {
  return (
    <ViewDefault>
      <LayoutGrid>
        <Title title={"NUESTRA CARTA"} />

        <Subtitle1 title={"Tapeos"} />

        <Dishname name={"Bruschetta"} />
        <Description
          text={
            "Salmón ahumado, crema de ciboulette, polvo de limón, jamón crudo, queso chevrotin fundido, tomates asados"
          }
        />

        <Dishname name={"Croquetas rellenas"} />
        <Description
          text={
            "Espinaca y queso sardo, osobuco, jamón crudo y queso provolone"
          }
        />

        <Dishname name={"Langostinos rebozados al ajillo"} />
        <Description text={"Espuma de papas, criolla de mango y guacamole"} />

        <Dishname name={"Tabla con variedad de quesos"} />
        <Description
          text={
            "Roquefort, camembert, provolone, chevrotin, aceitunas maceradas, cherrys confitados y frutos secos"
          }
        />

        <Dishname name={"Pinchos de boconccinos"} />
        <Description
          text={
            "Cherrys confitados, aceitunas maceradas, queso camembert apanado en frutos secos, chutney de arandanos"
          }
        />

        <Dishname name={"Provoleta grillada"} />
        <Description text={"Chutney de tomate, rúcula, praliné de almendras"} />

        <Dishname name={"Pulpo grillé"} />
        <Description
          text={
            "Espinaca y queso sardo, osobuco, jamóSobre espuma de papas, cebollas encurtidas, alioli de pimientos"
          }
        />

        <Subtitle1 title={"Pizza al horno de barro"} />

        <Dishname name={"Pizza especial"} />
        <Description
          text={
            "Salsa pomodori, muzzarella, jamón cocido, pimientos asados y aceitunas verdes"
          }
        />

        <Dishname name={"Pizza de rúcula"} />
        <Description
          text={
            "Salsa pomodori, muzzarella, rúcula, jamón crudo, parmesano e hilos de oliva"
          }
        />

        <Dishname name={"Pizza napolitana"} />
        <Description
          text={"Salsa pomodori, muzzarella, rodaja de tomates y aceite de ajo"}
        />

        <Dishname name={"Pizza agridulce"} />
        <Description
          text={
            "Salsa pomodori, muzzarella, jamón cocido, ananá, cereza y azúcar negra"
          }
        />

        <Subtitle1 title={"Sándwich de ciabatta"} />

        <Dishname name={"Ciabatta de bondiola"} />
        <Description
          text={
            "Pan ciabatta, bondiola braseada, cebolla caramelizada, queso tybo y barbacoa, acompañado de batatas fritas"
          }
        />

        <Dishname name={"Ciabatta mediterranea"} />
        <Description
          text={
            "Pan ciabatta, queso crema, jamón crudo, tomates secos, rúcula y láminas de ques, acompañado de papas fritas"
          }
        />

        <Dishname name={"Ciabatta de ternera"} />
        <Description
          text={
            "Pan ciabatta, pata braseada, cebollas moradas y asadas, pimientos asados, queso tybo, mostaza, ajo y miel, acompañado de papas fritas"
          }
        />

        <Subtitle1 title={"Empanadas"} />

        <Dishname name={"Matambre cortada a cuchillo"} />
        <Dishname name={"Boga"} />
        <Dishname name={"Vegetales, ricotta ahumada y parmesano"} />
        <Dishname name={"Remolacha, queso azul y nueces"} />
        <Dishname name={"Pollo al disco"} />

        <Subtitle1 title={"Principales"} />

        <Dishname name={"Cazuela de ragout de ternera"} />
        <Description text={"Con hongos silvestres y mil hojas crocante"} />

        <Dishname name={"Ribs de cerdo ahumadas"} />
        <Description
          text={
            "Reducción de fondo oscuro, ensalada coleslaw y papas rotas crocantes"
          }
        />

        <Dishname name={"Ojo de bife Angus"} />
        <Description text={"Fondo oscuro, cremoso de papas y salsa criolla"} />

        <Dishname name={"Milanesa de ternera napolitana gratinada"} />
        <Description text={"Acompañada de papas rotas crocantes o puré"} />

        <Subtitle1 title={"Pastas"} />

        <Dishname name={"Ñoquis"} />
        <Description text={"Rellenos de queso manchego y salsa de tomate"} />

        <Dishname name={"Tagliatelle"} />
        <Description text={"Salsa de hongos y almendras tostadas"} />

        <Dishname name={"Canelones de espinaca"} />
        <Description
          text={"Nueces y ricotta gratinados, salsa de tomates asados"}
        />

        <Subtitle1 title={"Risotto"} />

        <Dishname name={"Espinaca"} />
        <Description text={"Burrata y cherrys asados"} />

        <Dishname name={"Remolacha"} />
        <Description text={"Queso azul y almendras tostadas"} />

        <Subtitle1 title={"Ensalada"} />

        <Dishname name={"Caesar de ave"} />
        <Description
          text={
            "Mix de hojas verdes, croutones integrales, polvo de panceta, aderezo"
          }
        />

        <Dishname name={"Burrata"} />
        <Description
          text={
            "Mix de hojas verdes, naranjas en vivo, palta fileteada, praliné de almendras, tomates cherry, vinagreta cítrica"
          }
        />

        <Subtitle1 title={"Wok"} />

        <Dishname name={"Pollo"} />
        <Description
          text={
            "Salteado de pollo al estilo oriental, acompañado de pimientos rojos y verdes, cebolla de verdeo, brotes de soja, zanahorias y arroz yamaní"
          }
        />

        <Dishname name={"Lomo"} />
        <Description
          text={
            "Salteado de lomo al estilo oriental, acompañado de pimientos rojos y verdes, cebolla de verdeo, salsa teriyaki, brotes de soja, zanahoria y arroz hanabi"
          }
        />

        <Dishname name={"Vegetariano/Vegano"} />
        <Description
          text={
            "Salteado de vegetales con arroz yamaní, soja texturizada, brotes, almendras tostadas y semillas de calabaza con salsa teriyaki"
          }
        />

        <Subtitle1 title={"Menú kids"} />

        <Dishname name={"Bife de lomo y papas crocantes"} />
        <Dishname name={"Milanesa y papas crocantes"} />
        <Dishname name={"Nuggets de pollo y papas crocantes"} />
        <Dishname name={"Alitas de pollo rebozadas"} />
        <Description
          text={"Con salsa alioli, barbacoa picante y honey mustard"}
        />

        <Subtitle1 title={"Postres"} />

        <Dishname name={"Volcán de chocolate"} />
        <Description text={"Con crema helada de americana"} />

        <Dishname name={"Peras al malbec"} />
        <Description
          text={
            "Masa sableè de naranja, cremoso de chantilly, mousse de naranja"
          }
        />

        <Dishname name={"Flan casero"} />
        <Description text={"Con caramelo, dulce de leche y crema chantilly"} />

        <Dishname name={"Brownie"} />
        <Description
          text={
            "Base de brownie con oreo, dulce de leche repostero y merengue italiano"
          }
        />

        <Dishname name={"Tiramisú"} />
        <Description
          text={
            "Biscuit humedecido con almíbar de café, relleno de mascarpone y cobertura de cacao"
          }
        />

        <Dishname name={"Cheescake de frutos rojos"} />
        <Description
          text={
            "Base de vainilla, crema de queso con notas de limón y cobertura de frutos rojos"
          }
        />

        <Dishname name={"Cheescake de maracuyá"} />
        <Description
          text={
            "Base de chocolate, crema de queso con notas de limón y cobertura de maracuyá"
          }
        />

        <Dishname name={"Bruce"} />
        <Description
          text={
            "Bizcochuelo de chocolate con notas de café relleno de crema Bariloche y ganache de chocolate blanco"
          }
        />

        <Dishname name={"Don Pedro"} />
        <Description text={"Helado de americana, whisky y nueces"} />
      </LayoutGrid>
    </ViewDefault>
  );
}

const Title = ({ title }) => {
  return (
    <h2
      style={{
        paddingLeft: "10px",
        marginTop: "2vh",
        fontFamily: "PoppinsMedium",
        fontWeight: "800",
        fontSize: "16px",
        textAlign: "left",
        marginBottom: "-25px",
        color: mainColors.textBlack,
        alignSelf: "flex-start",
        gridColumn: "span 2",
      }}
    >
      {title}
    </h2>
  );
};

const Subtitle1 = ({ title }) => {
  return (
    <h3
      style={{
        paddingLeft: "10px",
        fontFamily: "PoppinsMedium",
        fontWeight: "800",
        fontSize: "15px",
        textAlign: "left",
        marginBottom: "-15px",
        color: mainColors.textBlack,
        alignSelf: "flex-start",
        gridColumn: "span 2",
      }}
    >
      {title}
    </h3>
  );
};

const Dishname = ({ name }) => {
  return (
    <h4
      style={{
        paddingLeft: "10px",
        fontFamily: "PoppinsThin",
        fontWeight: "800",
        fontSize: "13px",
        textAlign: "left",
        marginBottom: "-15px",
        color: mainColors.textBlack,
        alignSelf: "flex-start",
        gridColumn: "span 2",
      }}
    >
      {name}
    </h4>
  );
};

const Description = ({ text }) => {
  return (
    <p
      style={{
        paddingLeft: "10px",
        fontFamily: "PoppinsMedium",
        fontWeight: "300",
        fontSize: "10px",
        textAlign: "left",
        marginBottom: "-15px",
        color: mainColors.textBlack,
        alignSelf: "flex-start",
        gridColumn: "span 2",
      }}
    >
      {text}
    </p>
  );
};

export default PageMenu;
