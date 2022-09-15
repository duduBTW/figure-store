import { useMutation } from "@tanstack/react-query";
import Button from "components/button";
import Input from "components/input";
import InputMask from "components/input/mask";
import InputSelect from "components/input/select";
import Text from "components/text";
import { UserAddressFormInputs } from "components/user/adress/form";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import service from "server/client/services";
import { RegisterRequest } from "server/client/user";
import {
  UserAuthContent,
  UserAuthFooter,
  UserAuthFormContainer,
  UserAuthFormDivider,
  UserAuthTitle,
} from "../../styles";

const UserAuthRegisterForm = () => {
  const { push } = useRouter();
  const { mutate: register, isLoading } = useMutation(service.register, {
    onSuccess: () => {
      toast.success("Account created with success");
      push("/login");
    },
    onError: () => toast.error("Error while creating a new account"),
  });
  const formMethods = useForm<RegisterRequest>();

  return (
    <UserAuthContent>
      <UserAuthTitle variant="title-1">Register</UserAuthTitle>
      <FormProvider {...formMethods}>
        <UserAuthFormContainer
          loading={isLoading}
          onSubmit={formMethods.handleSubmit((data) => register(data))}
        >
          <Input name="name" label="Name" />
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
          <InputMask
            valueIsNumericString
            output="value"
            format="###-###-###-##"
            name="document"
            label="Document"
          />
          <InputMask
            valueIsNumericString
            output="value"
            format="#####-####"
            name="phone"
            label="Phone"
          />
          <InputSelect
            options={countryListAllIsoData}
            name="nacionalitty"
            label="Nacionalitty"
            placeholder="Select a nacionalitty"
          />
          <UserAuthFormDivider />

          <UserAddressFormInputs />
          <Button loading={isLoading}>Register</Button>
        </UserAuthFormContainer>
      </FormProvider>
      <UserAuthFooter>
        <Link href="/login">
          <a>
            <Text variant="button-outlined" color="primary">
              Already have an account?
            </Text>
          </a>
        </Link>
      </UserAuthFooter>
    </UserAuthContent>
  );
};

// All simple ISO 3166 country data
// including: 2-character, 3-character, full country name and numeric value.
// Sorted alphabetical by country name (special characters on bottom)
export const countryListAllIsoData = [
  { value: "AF", value3: "AFG", label: "Afghanistan", number: "004" },
  { value: "AL", value3: "ALB", label: "Albania", number: "008" },
  { value: "DZ", value3: "DZA", label: "Algeria", number: "012" },
  { value: "AS", value3: "ASM", label: "American Samoa", number: "016" },
  { value: "AD", value3: "AND", label: "Andorra", number: "020" },
  { value: "AO", value3: "AGO", label: "Angola", number: "024" },
  { value: "AI", value3: "AIA", label: "Anguilla", number: "660" },
  { value: "AQ", value3: "ATA", label: "Antarctica", number: "010" },
  { value: "AG", value3: "ATG", label: "Antigua and Barbuda", number: "028" },
  { value: "AR", value3: "ARG", label: "Argentina", number: "032" },
  { value: "AM", value3: "ARM", label: "Armenia", number: "051" },
  { value: "AW", value3: "ABW", label: "Aruba", number: "533" },
  { value: "AU", value3: "AUS", label: "Australia", number: "036" },
  { value: "AT", value3: "AUT", label: "Austria", number: "040" },
  { value: "AZ", value3: "AZE", label: "Azerbaijan", number: "031" },
  { value: "BS", value3: "BHS", label: "Bahamas (the)", number: "044" },
  { value: "BH", value3: "BHR", label: "Bahrain", number: "048" },
  { value: "BD", value3: "BGD", label: "Bangladesh", number: "050" },
  { value: "BB", value3: "BRB", label: "Barbados", number: "052" },
  { value: "BY", value3: "BLR", label: "Belarus", number: "112" },
  { value: "BE", value3: "BEL", label: "Belgium", number: "056" },
  { value: "BZ", value3: "BLZ", label: "Belize", number: "084" },
  { value: "BJ", value3: "BEN", label: "Benin", number: "204" },
  { value: "BM", value3: "BMU", label: "Bermuda", number: "060" },
  { value: "BT", value3: "BTN", label: "Bhutan", number: "064" },
  {
    value: "BO",
    value3: "BOL",
    label: "Bolivia (Plurinational State of)",
    number: "068",
  },
  {
    value: "BQ",
    value3: "BES",
    label: "Bonaire, Sint Eustatius and Saba",
    number: "535",
  },
  {
    value: "BA",
    value3: "BIH",
    label: "Bosnia and Herzegovina",
    number: "070",
  },
  { value: "BW", value3: "BWA", label: "Botswana", number: "072" },
  { value: "BV", value3: "BVT", label: "Bouvet Island", number: "074" },
  { value: "BR", value3: "BRA", label: "Brazil", number: "076" },
  {
    value: "IO",
    value3: "IOT",
    label: "British Indian Ocean Territory (the)",
    number: "086",
  },
  { value: "BN", value3: "BRN", label: "Brunei Darussalam", number: "096" },
  { value: "BG", value3: "BGR", label: "Bulgaria", number: "100" },
  { value: "BF", value3: "BFA", label: "Burkina Faso", number: "854" },
  { value: "BI", value3: "BDI", label: "Burundi", number: "108" },
  { value: "CV", value3: "CPV", label: "Cabo Verde", number: "132" },
  { value: "KH", value3: "KHM", label: "Cambodia", number: "116" },
  { value: "CM", value3: "CMR", label: "Cameroon", number: "120" },
  { value: "CA", value3: "CAN", label: "Canada", number: "124" },
  { value: "KY", value3: "CYM", label: "Cayman Islands (the)", number: "136" },
  {
    value: "CF",
    value3: "CAF",
    label: "Central African Republic (the)",
    number: "140",
  },
  { value: "TD", value3: "TCD", label: "Chad", number: "148" },
  { value: "CL", value3: "CHL", label: "Chile", number: "152" },
  { value: "CN", value3: "CHN", label: "China", number: "156" },
  { value: "CX", value3: "CXR", label: "Christmas Island", number: "162" },
  {
    value: "CC",
    value3: "CCK",
    label: "Cocos (Keeling) Islands (the)",
    number: "166",
  },
  { value: "CO", value3: "COL", label: "Colombia", number: "170" },
  { value: "KM", value3: "COM", label: "Comoros (the)", number: "174" },
  {
    value: "CD",
    value3: "COD",
    label: "Congo (the Democratic Republic of the)",
    number: "180",
  },
  { value: "CG", value3: "COG", label: "Congo (the)", number: "178" },
  { value: "CK", value3: "COK", label: "Cook Islands (the)", number: "184" },
  { value: "CR", value3: "CRI", label: "Costa Rica", number: "188" },
  { value: "HR", value3: "HRV", label: "Croatia", number: "191" },
  { value: "CU", value3: "CUB", label: "Cuba", number: "192" },
  { value: "CW", value3: "CUW", label: "Curaçao", number: "531" },
  { value: "CY", value3: "CYP", label: "Cyprus", number: "196" },
  { value: "CZ", value3: "CZE", label: "Czechia", number: "203" },
  { value: "CI", value3: "CIV", label: "Côte d'Ivoire", number: "384" },
  { value: "DK", value3: "DNK", label: "Denmark", number: "208" },
  { value: "DJ", value3: "DJI", label: "Djibouti", number: "262" },
  { value: "DM", value3: "DMA", label: "Dominica", number: "212" },
  {
    value: "DO",
    value3: "DOM",
    label: "Dominican Republic (the)",
    number: "214",
  },
  { value: "EC", value3: "ECU", label: "Ecuador", number: "218" },
  { value: "EG", value3: "EGY", label: "Egypt", number: "818" },
  { value: "SV", value3: "SLV", label: "El Salvador", number: "222" },
  { value: "GQ", value3: "GNQ", label: "Equatorial Guinea", number: "226" },
  { value: "ER", value3: "ERI", label: "Eritrea", number: "232" },
  { value: "EE", value3: "EST", label: "Estonia", number: "233" },
  { value: "SZ", value3: "SWZ", label: "Eswatini", number: "748" },
  { value: "ET", value3: "ETH", label: "Ethiopia", number: "231" },
  {
    value: "FK",
    value3: "FLK",
    label: "Falkland Islands (the) [Malvinas]",
    number: "238",
  },
  { value: "FO", value3: "FRO", label: "Faroe Islands (the)", number: "234" },
  { value: "FJ", value3: "FJI", label: "Fiji", number: "242" },
  { value: "FI", value3: "FIN", label: "Finland", number: "246" },
  { value: "FR", value3: "FRA", label: "France", number: "250" },
  { value: "GF", value3: "GUF", label: "French Guiana", number: "254" },
  { value: "PF", value3: "PYF", label: "French Polynesia", number: "258" },
  {
    value: "TF",
    value3: "ATF",
    label: "French Southern Territories (the)",
    number: "260",
  },
  { value: "GA", value3: "GAB", label: "Gabon", number: "266" },
  { value: "GM", value3: "GMB", label: "Gambia (the)", number: "270" },
  { value: "GE", value3: "GEO", label: "Georgia", number: "268" },
  { value: "DE", value3: "DEU", label: "Germany", number: "276" },
  { value: "GH", value3: "GHA", label: "Ghana", number: "288" },
  { value: "GI", value3: "GIB", label: "Gibraltar", number: "292" },
  { value: "GR", value3: "GRC", label: "Greece", number: "300" },
  { value: "GL", value3: "GRL", label: "Greenland", number: "304" },
  { value: "GD", value3: "GRD", label: "Grenada", number: "308" },
  { value: "GP", value3: "GLP", label: "Guadeloupe", number: "312" },
  { value: "GU", value3: "GUM", label: "Guam", number: "316" },
  { value: "GT", value3: "GTM", label: "Guatemala", number: "320" },
  { value: "GG", value3: "GGY", label: "Guernsey", number: "831" },
  { value: "GN", value3: "GIN", label: "Guinea", number: "324" },
  { value: "GW", value3: "GNB", label: "Guinea-Bissau", number: "624" },
  { value: "GY", value3: "GUY", label: "Guyana", number: "328" },
  { value: "HT", value3: "HTI", label: "Haiti", number: "332" },
  {
    value: "HM",
    value3: "HMD",
    label: "Heard Island and McDonald Islands",
    number: "334",
  },
  { value: "VA", value3: "VAT", label: "Holy See (the)", number: "336" },
  { value: "HN", value3: "HND", label: "Honduras", number: "340" },
  { value: "HK", value3: "HKG", label: "Hong Kong", number: "344" },
  { value: "HU", value3: "HUN", label: "Hungary", number: "348" },
  { value: "IS", value3: "ISL", label: "Iceland", number: "352" },
  { value: "IN", value3: "IND", label: "India", number: "356" },
  { value: "ID", value3: "IDN", label: "Indonesia", number: "360" },
  {
    value: "IR",
    value3: "IRN",
    label: "Iran (Islamic Republic of)",
    number: "364",
  },
  { value: "IQ", value3: "IRQ", label: "Iraq", number: "368" },
  { value: "IE", value3: "IRL", label: "Ireland", number: "372" },
  { value: "IM", value3: "IMN", label: "Isle of Man", number: "833" },
  { value: "IL", value3: "ISR", label: "Israel", number: "376" },
  { value: "IT", value3: "ITA", label: "Italy", number: "380" },
  { value: "JM", value3: "JAM", label: "Jamaica", number: "388" },
  { value: "JP", value3: "JPN", label: "Japan", number: "392" },
  { value: "JE", value3: "JEY", label: "Jersey", number: "832" },
  { value: "JO", value3: "JOR", label: "Jordan", number: "400" },
  { value: "KZ", value3: "KAZ", label: "Kazakhstan", number: "398" },
  { value: "KE", value3: "KEN", label: "Kenya", number: "404" },
  { value: "KI", value3: "KIR", label: "Kiribati", number: "296" },
  {
    value: "KP",
    value3: "PRK",
    label: "Korea (the Democratic People's Republic of)",
    number: "408",
  },
  {
    value: "KR",
    value3: "KOR",
    label: "Korea (the Republic of)",
    number: "410",
  },
  { value: "KW", value3: "KWT", label: "Kuwait", number: "414" },
  { value: "KG", value3: "KGZ", label: "Kyrgyzstan", number: "417" },
  {
    value: "LA",
    value3: "LAO",
    label: "Lao People's Democratic Republic (the)",
    number: "418",
  },
  { value: "LV", value3: "LVA", label: "Latvia", number: "428" },
  { value: "LB", value3: "LBN", label: "Lebanon", number: "422" },
  { value: "LS", value3: "LSO", label: "Lesotho", number: "426" },
  { value: "LR", value3: "LBR", label: "Liberia", number: "430" },
  { value: "LY", value3: "LBY", label: "Libya", number: "434" },
  { value: "LI", value3: "LIE", label: "Liechtenstein", number: "438" },
  { value: "LT", value3: "LTU", label: "Lithuania", number: "440" },
  { value: "LU", value3: "LUX", label: "Luxembourg", number: "442" },
  { value: "MO", value3: "MAC", label: "Macao", number: "446" },
  { value: "MG", value3: "MDG", label: "Madagascar", number: "450" },
  { value: "MW", value3: "MWI", label: "Malawi", number: "454" },
  { value: "MY", value3: "MYS", label: "Malaysia", number: "458" },
  { value: "MV", value3: "MDV", label: "Maldives", number: "462" },
  { value: "ML", value3: "MLI", label: "Mali", number: "466" },
  { value: "MT", value3: "MLT", label: "Malta", number: "470" },
  {
    value: "MH",
    value3: "MHL",
    label: "Marshall Islands (the)",
    number: "584",
  },
  { value: "MQ", value3: "MTQ", label: "Martinique", number: "474" },
  { value: "MR", value3: "MRT", label: "Mauritania", number: "478" },
  { value: "MU", value3: "MUS", label: "Mauritius", number: "480" },
  { value: "YT", value3: "MYT", label: "Mayotte", number: "175" },
  { value: "MX", value3: "MEX", label: "Mexico", number: "484" },
  {
    value: "FM",
    value3: "FSM",
    label: "Micronesia (Federated States of)",
    number: "583",
  },
  {
    value: "MD",
    value3: "MDA",
    label: "Moldova (the Republic of)",
    number: "498",
  },
  { value: "MC", value3: "MCO", label: "Monaco", number: "492" },
  { value: "MN", value3: "MNG", label: "Mongolia", number: "496" },
  { value: "ME", value3: "MNE", label: "Montenegro", number: "499" },
  { value: "MS", value3: "MSR", label: "Montserrat", number: "500" },
  { value: "MA", value3: "MAR", label: "Morocco", number: "504" },
  { value: "MZ", value3: "MOZ", label: "Mozambique", number: "508" },
  { value: "MM", value3: "MMR", label: "Myanmar", number: "104" },
  { value: "NA", value3: "NAM", label: "Namibia", number: "516" },
  { value: "NR", value3: "NRU", label: "Nauru", number: "520" },
  { value: "NP", value3: "NPL", label: "Nepal", number: "524" },
  { value: "NL", value3: "NLD", label: "Netherlands (the)", number: "528" },
  { value: "NC", value3: "NCL", label: "New Caledonia", number: "540" },
  { value: "NZ", value3: "NZL", label: "New Zealand", number: "554" },
  { value: "NI", value3: "NIC", label: "Nicaragua", number: "558" },
  { value: "NE", value3: "NER", label: "Niger (the)", number: "562" },
  { value: "NG", value3: "NGA", label: "Nigeria", number: "566" },
  { value: "NU", value3: "NIU", label: "Niue", number: "570" },
  { value: "NF", value3: "NFK", label: "Norfolk Island", number: "574" },
  {
    value: "MP",
    value3: "MNP",
    label: "Northern Mariana Islands (the)",
    number: "580",
  },
  { value: "NO", value3: "NOR", label: "Norway", number: "578" },
  { value: "OM", value3: "OMN", label: "Oman", number: "512" },
  { value: "PK", value3: "PAK", label: "Pakistan", number: "586" },
  { value: "PW", value3: "PLW", label: "Palau", number: "585" },
  { value: "PS", value3: "PSE", label: "Palestine, State of", number: "275" },
  { value: "PA", value3: "PAN", label: "Panama", number: "591" },
  { value: "PG", value3: "PNG", label: "Papua New Guinea", number: "598" },
  { value: "PY", value3: "PRY", label: "Paraguay", number: "600" },
  { value: "PE", value3: "PER", label: "Peru", number: "604" },
  { value: "PH", value3: "PHL", label: "Philippines (the)", number: "608" },
  { value: "PN", value3: "PCN", label: "Pitcairn", number: "612" },
  { value: "PL", value3: "POL", label: "Poland", number: "616" },
  { value: "PT", value3: "PRT", label: "Portugal", number: "620" },
  { value: "PR", value3: "PRI", label: "Puerto Rico", number: "630" },
  { value: "QA", value3: "QAT", label: "Qatar", number: "634" },
  {
    value: "MK",
    value3: "MKD",
    label: "Republic of North Macedonia",
    number: "807",
  },
  { value: "RO", value3: "ROU", label: "Romania", number: "642" },
  {
    value: "RU",
    value3: "RUS",
    label: "Russian Federation (the)",
    number: "643",
  },
  { value: "RW", value3: "RWA", label: "Rwanda", number: "646" },
  { value: "RE", value3: "REU", label: "Réunion", number: "638" },
  { value: "BL", value3: "BLM", label: "Saint Barthélemy", number: "652" },
  {
    value: "SH",
    value3: "SHN",
    label: "Saint Helena, Ascension and Tristan da Cunha",
    number: "654",
  },
  { value: "KN", value3: "KNA", label: "Saint Kitts and Nevis", number: "659" },
  { value: "LC", value3: "LCA", label: "Saint Lucia", number: "662" },
  {
    value: "MF",
    value3: "MAF",
    label: "Saint Martin (French part)",
    number: "663",
  },
  {
    value: "PM",
    value3: "SPM",
    label: "Saint Pierre and Miquelon",
    number: "666",
  },
  {
    value: "VC",
    value3: "VCT",
    label: "Saint Vincent and the Grenadines",
    number: "670",
  },
  { value: "WS", value3: "WSM", label: "Samoa", number: "882" },
  { value: "SM", value3: "SMR", label: "San Marino", number: "674" },
  { value: "ST", value3: "STP", label: "Sao Tome and Principe", number: "678" },
  { value: "SA", value3: "SAU", label: "Saudi Arabia", number: "682" },
  { value: "SN", value3: "SEN", label: "Senegal", number: "686" },
  { value: "RS", value3: "SRB", label: "Serbia", number: "688" },
  { value: "SC", value3: "SYC", label: "Seychelles", number: "690" },
  { value: "SL", value3: "SLE", label: "Sierra Leone", number: "694" },
  { value: "SG", value3: "SGP", label: "Singapore", number: "702" },
  {
    value: "SX",
    value3: "SXM",
    label: "Sint Maarten (Dutch part)",
    number: "534",
  },
  { value: "SK", value3: "SVK", label: "Slovakia", number: "703" },
  { value: "SI", value3: "SVN", label: "Slovenia", number: "705" },
  { value: "SB", value3: "SLB", label: "Solomon Islands", number: "090" },
  { value: "SO", value3: "SOM", label: "Somalia", number: "706" },
  { value: "ZA", value3: "ZAF", label: "South Africa", number: "710" },
  {
    value: "GS",
    value3: "SGS",
    label: "South Georgia and the South Sandwich Islands",
    number: "239",
  },
  { value: "SS", value3: "SSD", label: "South Sudan", number: "728" },
  { value: "ES", value3: "ESP", label: "Spain", number: "724" },
  { value: "LK", value3: "LKA", label: "Sri Lanka", number: "144" },
  { value: "SD", value3: "SDN", label: "Sudan (the)", number: "729" },
  { value: "SR", value3: "SUR", label: "Surilabel", number: "740" },
  {
    value: "SJ",
    value3: "SJM",
    label: "Svalbard and Jan Mayen",
    number: "744",
  },
  { value: "SE", value3: "SWE", label: "Sweden", number: "752" },
  { value: "CH", value3: "CHE", label: "Switzerland", number: "756" },
  { value: "SY", value3: "SYR", label: "Syrian Arab Republic", number: "760" },
  { value: "TW", value3: "TWN", label: "Taiwan", number: "158" },
  { value: "TJ", value3: "TJK", label: "Tajikistan", number: "762" },
  {
    value: "TZ",
    value3: "TZA",
    label: "Tanzania, United Republic of",
    number: "834",
  },
  { value: "TH", value3: "THA", label: "Thailand", number: "764" },
  { value: "TL", value3: "TLS", label: "Timor-Leste", number: "626" },
  { value: "TG", value3: "TGO", label: "Togo", number: "768" },
  { value: "TK", value3: "TKL", label: "Tokelau", number: "772" },
  { value: "TO", value3: "TON", label: "Tonga", number: "776" },
  { value: "TT", value3: "TTO", label: "Trinidad and Tobago", number: "780" },
  { value: "TN", value3: "TUN", label: "Tunisia", number: "788" },
  { value: "TR", value3: "TUR", label: "Turkey", number: "792" },
  { value: "TM", value3: "TKM", label: "Turkmenistan", number: "795" },
  {
    value: "TC",
    value3: "TCA",
    label: "Turks and Caicos Islands (the)",
    number: "796",
  },
  { value: "TV", value3: "TUV", label: "Tuvalu", number: "798" },
  { value: "UG", value3: "UGA", label: "Uganda", number: "800" },
  { value: "UA", value3: "UKR", label: "Ukraine", number: "804" },
  {
    value: "AE",
    value3: "ARE",
    label: "United Arab Emirates (the)",
    number: "784",
  },
  {
    value: "GB",
    value3: "GBR",
    label: "United Kingdom of Great Britain and Northern Ireland (the)",
    number: "826",
  },
  {
    value: "UM",
    value3: "UMI",
    label: "United States Minor Outlying Islands (the)",
    number: "581",
  },
  {
    value: "US",
    value3: "USA",
    label: "United States of America (the)",
    number: "840",
  },
  { value: "UY", value3: "URY", label: "Uruguay", number: "858" },
  { value: "UZ", value3: "UZB", label: "Uzbekistan", number: "860" },
  { value: "VU", value3: "VUT", label: "Vanuatu", number: "548" },
  {
    value: "VE",
    value3: "VEN",
    label: "Venezuela (Bolivarian Republic of)",
    number: "862",
  },
  { value: "VN", value3: "VNM", label: "Viet Nam", number: "704" },
  {
    value: "VG",
    value3: "VGB",
    label: "Virgin Islands (British)",
    number: "092",
  },
  { value: "VI", value3: "VIR", label: "Virgin Islands (U.S.)", number: "850" },
  { value: "WF", value3: "WLF", label: "Wallis and Futuna", number: "876" },
  { value: "EH", value3: "ESH", label: "Western Sahara", number: "732" },
  { value: "YE", value3: "YEM", label: "Yemen", number: "887" },
  { value: "ZM", value3: "ZMB", label: "Zambia", number: "894" },
  { value: "ZW", value3: "ZWE", label: "Zimbabwe", number: "716" },
  { value: "AX", value3: "ALA", label: "Åland Islands", number: "248" },
];

export default UserAuthRegisterForm;
