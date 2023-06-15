import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

export const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange=(bolum:string)=>(event:React.SyntheticEvent, isExpanded:boolean)=>{
        setExpanded(isExpanded ? bolum : false)      //iszExpanded parametresi true ise setExpanded gelen bolum parametresine eşitlenir, false is Expanded False set edilir
    }                                                //Expanded false eşit olduğunda(kapatmak için tıklandığında) Expanded === "Bolum 1" olmadığında kapanacak
  return (
    <div>
      {/*  Basic Accordion */}
      {/* {<Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Bölüm 1</Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          rerum laboriosam fugiat rem doloribus, reprehenderit minus in ipsam.
          Consequatur culpa odit odio, architecto aspernatur ducimus consectetur
          explicabo nesciunt sint inventore!
        </AccordionDetails>
      </Accordion>                                 

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Bölüm 2</Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit
          adipisci labore iste reiciendis in, officia similique nam
          necessitatibus hic, recusandae earum doloribus aliquam tenetur!
          Exercitationem accusamus dicta eius expedita.
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Bölüm 3</Typography>
        </AccordionSummary>

        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          blanditiis saepe animi temporibus tenetur voluptas nobis eaque
          voluptatem sunt impedit, alias veniam, iste non ducimus qui totam
          voluptate sed itaque?
        </AccordionDetails>
      </Accordion>} */}
                                                                                              {/* Accordion un yanına yorum satırı eklelyince hata veriyor. */}
                                                                                            {/*Accordion daki onChange normalkilerden biraz daha farklı */}
        <Accordion expanded={expanded === 'bolum1'} onChange={handleChange('bolum1')}>   
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>                             {/*event ve expanded adında iki parametresi bulunur, expanded tıklandığında true veya false değerinde dönüşüyor */}
            <Typography>Bölüm 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            accusantium impedit perferendis eos neque quibusdam, tempore quidem
            repellendus, dolores eius quis natus ab quas animi voluptas? Quo
            placeat impedit quasi.
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded==="bolum2"} onChange={handleChange('bolum2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Bölüm 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            accusantium impedit perferendis eos neque quibusdam, tempore quidem
            repellendus, dolores eius quis natus ab quas animi voluptas? Quo
            placeat impedit quasi.
          </AccordionDetails>
        </Accordion>
        
        <Accordion expanded={expanded==='bolum3'} onChange={handleChange('bolum3')}>          
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>                                    {/* expanded true ya eşit ise açık, false a eşit ise kapalı */}
            <Typography>Bölüm 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            accusantium impedit perferendis eos neque quisbusdam, tempore quidem
            repellendus, dolores eius quis natus ab quas animi voluptas? Quo
            placeat impedit quasii.
          </AccordionDetails>
        </Accordion>
      
    </div>
  );
};
