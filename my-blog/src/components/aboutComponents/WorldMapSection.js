import React from "react";
import "../../App.css";
import { WorldMap } from "react-svg-worldmap";

const WorldMapSection = () => {
  const data = [
    { country: "cn", value: 48 }, // china
    { country: "in", value: 70 }, // india
    { country: "us", value: 101 }, // united states
    { country: "id", value: 6 }, // indonesia
    { country: "pk", value: 0 }, // pakistan
    { country: "br", value: 14 }, // brazil
    { country: "ng", value: 0 }, // nigeria
    { country: "bd", value: 5 }, // bangladesh
    { country: "ru", value: 256 }, // russia
    { country: "mx", value: 4 }, // mexico

    { country: "ua", value: 93 }, // ukraine
    { country: "am", value: 44 }, // armenia
    { country: "az", value: 26 }, // azerbaijan
    { country: "hu", value: 58 }, // hungary
    { country: "fr", value: 50 }, // france
    { country: "pl", value: 45 }, //poland
    { country: "de", value: 96 }, // germany
    { country: "nl", value: 36 }, // dutch
    { country: "gb", value: 42 }, // england
    { country: "es", value: 56 }, // spain

    { country: "il", value: 43 }, // israel
    { country: "cz", value: 36 }, // czech
    { country: "ge", value: 32 }, // georgia
    { country: "no", value: 16 }, // norway
    { country: "hr", value: 32 }, // croatia
    { country: "rs", value: 58 }, // serbia
    { country: "ar", value: 23 }, //argentina
    { country: "ro", value: 22 }, // romania
    { country: "gr", value: 14 }, // greece
    { country: "by", value: 18 }, // Belarus
    { country: "tr", value: 12 }, // turkey

    { country: "se", value: 22 }, // sweden
    { country: "cu", value: 27 }, // cuba
    { country: "ir", value: 14 }, // iran
    { country: "dk", value: 13 }, // denmark
    { country: "pe", value: 8 }, // peru
    { country: "uz", value: 17 }, // uzbekistan
    { country: "it", value: 16 }, // italy
    { country: "ca", value: 14 }, // cananda
    { country: "bg", value: 34 }, // bulgaria
    { country: "ch", value: 11 }, // switzerland
    { country: "kz", value: 15 }, // kazakhstan

    { country: "si", value: 12 }, // slovenia
    { country: "at", value: 9 }, // austria
    { country: "vn", value: 11 }, // vietnam
    { country: "lv", value: 12 }, // latvia
    { country: "au", value: 10 }, // aus
    { country: "ba", value: 8 }, // B&Herz
    { country: "is", value: 14 }, //ice
    { country: "be", value: 9 }, // belgium
    { country: "sk", value: 13 }, // Slovakia
    { country: "lt", value: 9 }, // Lithuania
    { country: "eg", value: 6 }, // Egypt

    { country: "co", value: 9 }, // colombia
    { country: "mk", value: 10 }, // macedonia
    { country: "ph", value: 13 }, // philipines
    { country: "cl", value: 6 }, // chile
    { country: "md", value: 7 }, // moldova
    { country: "mn", value: 4 }, // mongolia
    { country: "fi", value: 5 }, // finland
    { country: "me", value: 6 }, // montengaro
    { country: "ee", value: 6 }, // estonia
    { country: "ch", value: 6 }, // indonesia
    { country: "id", value: 15 }, // portugal

    { country: "sve", value: 2 }, // ven
    { country: "py", value: 4 }, // paraguay
    { country: "bo", value: 1 }, // bolivia
    { country: "tm", value: 5 }, // turk
    { country: "ad", value: 2 }, // andorra
    { country: "dz", value: 3 }, // algeraia
    { country: "uy", value: 2 }, //uruguay
    { country: "sg", value: 3 }, // Singapore
    { country: "bd", value: 5 }, // Bangladesh
    { country: "ma", value: 1 }, // Mororcoo
    { country: "al", value: 1 }, // Albania

    { country: "mm", value: 1 }, // Myanmar
    { country: "cr", value: 1 }, // Costa
    { country: "zm", value: 1 }, // Zambia
    { country: "za", value: 1 }, // SA
    { country: "ec", value: 1 }, // Ecuador

    { country: "fo", value: 1 }, // Faroe Islands
    { country: "nz", value: 1 }, // NewZelans
    { country: "tn", value: 2 }, // Tunisia
    { country: "kg", value: 1 }, // Krygs
    { country: "do", value: 1 }, // Dom Rep
    { country: "mc", value: 4 }, // Monaco
    { country: "jp", value: 0 }, // Japan
    { country: "ae", value: 2 }, // UAE
    { country: "kr", value: 1 }, // S Korea
    { country: "tj", value: 1 }, // Tajiskstan
  ];

  return (
    <div className="map">
      <WorldMap
        color="blue"
        title="No. of GMs in each country"
        value-suffix="people"
        size="xl"
        data={data}
      />
    </div>
  );
};

export default WorldMapSection;
