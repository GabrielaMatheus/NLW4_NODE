import { Request,Response} from "express";
import { getCustomRepository, Not, IsNull } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class NpsController{
    async execute(request: Request, response: Response){
        const {survey_id}=request.params; //recebe o id 
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUsers = await surveysUsersRepository.find({
            //busca todas as respostas referentes a pesquisa com o valor dif de null
            survey_id,
            value: Not(IsNull()), 
        });

        
        //filter pega somente as pesquisas, length pega somente o tamanho 
        const detractor = surveysUsers.filter(
            (survey) => survey.value>=0 && survey.value <=6
            ).length;

        const promoters = surveysUsers.filter(
            (survey) => survey.value>=9 && survey.value <=10
            ).length;

        const passive = surveysUsers.filter(
            (survey) => survey.value>=7 && survey.value <=8
            ).length;
        
        const totalAnswers = surveysUsers.length;

        const calculate = Number(
            (((promoters - detractor)/totalAnswers) *100).toFixed(2)
        );

        return response.json({
            detractor,
            promoters,
            passive,
             totalAnswers,
             nps: calculate,
        });
    }
}

export {NpsController};