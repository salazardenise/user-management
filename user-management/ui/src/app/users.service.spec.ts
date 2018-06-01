import { User } from './types/user';
import { UsersService } from './users.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, async } from '@angular/core/testing';

describe('UsersService', () =>{
    let service: UsersService;
    let httpMock: HttpTestingController;
    let dummyUsers: User[];

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations:[],
          imports: [
            HttpClientTestingModule
          ],
          providers: [
            UsersService
          ]
        })
        .compileComponents();

        // TestBed instantiates components
        service = TestBed.get(UsersService);
        httpMock = TestBed.get(HttpTestingController);
        
        this.dummyUsers = [{ 
            id: 1,
            userName: 'number',
            firstName: 'string',
            lastName: 'string',
            password: 'string',
            phone: 'string',
            email: 'string'
        }];
      }));

    it('getUsers() should return success', async(() => {
    service.getUsers()
    .subscribe(res => {
        // When observable resolves, result should match test data
        expect(res).toEqual(this.dummyUsers);
        expect(res.length).toBe(1);
        });
    
        // The following `expectOne()` will match the request's URL.    
        let mock = httpMock.expectOne('http://localhost:8080/api/users');

        // Assert that the request is a GET.
        expect(mock.request.method).toBe("GET");
        
        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        mock.flush(this.dummyUsers);  
    }));

    it('getUser() should return success', async(() => {
        let id: number =  this.dummyUsers[0].id.toString();
        service.getUser(id)
        .subscribe(res => {
            console.log(res);
            expect(res[0]).toEqual(this.dummyUsers[0]);
        });
        let mock = httpMock.expectOne(`http://localhost:8080/api/users/${id}`);
        expect(mock.request.method).toBe("GET");
        mock.flush(this.dummyUsers);
    }))

    it('addNewUser() should return success', async(() => {
        service.addNewUser(this.dummyUsers[0])
        .subscribe(res => {
            expect(res).toEqual(this.dummyUsers[0]);
        });
    
        let mock = httpMock.expectOne('http://localhost:8080/api/users');
        expect(mock.request.method).toBe("POST");
        mock.flush(this.dummyUsers[0]);
        }));

    it('deleteUser() should return success', async(() => {
        let id: number =  this.dummyUsers[0].id.toString();
        service.deleteUser(id)
        .subscribe(res => {
            expect(res).toEqual('OK')
        });
    
        let mock = httpMock.expectOne(`http://localhost:8080/api/users/${id}`);
        expect(mock.request.method).toBe("DELETE");
        mock.flush('OK');
    }));
              

    afterEach(() => {
        // Finally, assert that there are no outstanding requests.
        httpMock.verify();
     });
});