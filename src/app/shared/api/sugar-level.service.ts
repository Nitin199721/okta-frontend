import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import SugarLevel from '../models/SugarLevel';


@Injectable()
export default class SugarLevelService{
    public API = 'http://localhost:8080/api';
    public SUGARLEVELS_API = `${this.API}/sugarlevels`;

    constructor(private http:HttpClient)
    {}

    getAll(): Observable<Array<SugarLevel>>{
        return this.http.get<Array<SugarLevel>>(this.SUGARLEVELS_API);
    }

    get(id:string)
    {
        return this.http.get(`${this.SUGARLEVELS_API}/${id}`);
    }

    save(SugarLevel: SugarLevel): Observable<SugarLevel>{
        let result : Observable<SugarLevel>;
        if(SugarLevel.id)
        {
            result = this.http.put<SugarLevel>(
                `${this.SUGARLEVELS_API}/${SugarLevel.id}`,
                SugarLevel
            );
        }
        else{
            result = this.http.post<SugarLevel>(
                this.SUGARLEVELS_API, SugarLevel
            );
        }
        return result;
    }
    remove(id:number){
        return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
    }
}