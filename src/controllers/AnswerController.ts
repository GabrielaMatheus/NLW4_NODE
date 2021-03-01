
import { Request,Response} from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

    async execute(request: Request, response: Response){

        const {value} = request.params;
        const {u} = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);
        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });

        //se não existir da erro
        if(!surveyUser){
            throw new AppError("Survey user does not exists");

        }
        //se existir sobre escreve o valor pra que o usuário ja respondeu a pesquisa
        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser);
        return response.json(surveyUser);
    }
}


export {AnswerController};