import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint: string = 'http://localhost:3000/users';

  list$:BehaviorSubject<User[]>= new BehaviorSubject<User[]>([])

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Get all users from the database.
   * @returns on observable with all users.
   */
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}`)}
  getAll2(): void {
    this.http.get<User[]>(`${this.endpoint}`).subscribe(e=>this.list$.next(e))}

  /**
   * Get a specified user from the database by id.
   * @param id {number} user id.
   * @returns an observable with a user object.
   */
  get(id: number): Observable<User> {
    return this.http.get<User>(`${this.endpoint}/${id}`)}

  /**
   * Delete a user from the database.
   * The method is: this.http.delete
   */
  remove(user:User):Observable<User>{
    console.log(`${this.endpoint}/${user.id}`)
    return this.http.delete<User>(`${this.endpoint}/${user.id}`)}

  /**
   * Create a user in the database.
   * The method is: this.http.post
   */
  create(user:User):Observable<User>{
    return this.http.post<User>(`${this.endpoint}/${user.id}`, user).pipe(tap(()=>this.getAll2()))}

  /**
   * Update a user in the database.
   * The method is: this.http.patch
   */
  update(user:User):Observable<User>{
    return this.http.patch<User>(`${this.endpoint}/${user.id}`, user)}
}
