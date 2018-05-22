package com.example.usermanagement;

import com.example.usermanagement.models.User;
import com.example.usermanagement.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Stream;

import static io.restassured.RestAssured.given;
import static io.restassured.http.ContentType.JSON;
import static org.hamcrest.Matchers.equalTo;

import static com.codeborne.selenide.CollectionCondition.size;
import static io.restassured.RestAssured.when;
import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.Is.is;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersApiFeatureTest {

	@Autowired
	private UserRepository userRepository;

	@Before
	public void setUp() {
		userRepository.deleteAll();
	}

	@After
	public void tearDown() {
		userRepository.deleteAll();
	}

	@Test
	public void shouldAllowFullCrudFunctionalityForAUser() throws Exception {

		/////////////////////////////
		// TESTING INITIAL USER DATA
		User firstUser = new User(
				"username1",
				"firstname1",
				"lastname1",
				"password1",
				"phone1",
				"email1"
		);

		User secondUser = new User(
				"username2",
				"firstname2",
				"lastname2",
				"password2",
				"phone2",
				"email2"
		);

		Stream.of(firstUser, secondUser)
				.forEach(user -> {
					userRepository.save(user);
				});

		System.setProperty("selenide.browser", "Chrome");
		System.setProperty("selenide.headless", "true"); // speeds things up

		// Visit the UI in a browser
		open("http://localhost:4200");

		// There should only be two users
		$$("[data-user-display]").shouldHave(size(2));

		// Test that all data shows up for each user
		long firstUserId = firstUser.getId();
		$("#user-" + firstUserId + "-user-name").shouldHave(text("username1"));
		$("#user-" + firstUserId + "-full-name").shouldHave(text("firstname1 lastname1"));

		long secondUserId = secondUser.getId();
		$("#user-" + secondUserId + "-user-name").shouldHave(text("username2"));
		$("#user-" + secondUserId + "-full-name").shouldHave(text("firstname2 lastname2"));


		/////////////////////////////
		// TESTING CREATE
		// Visit the new user page
		$("#new-user-link").click();

		// Make sure the link worked and the form is now showing
		$("#new-user-form").should(appear);

		// Add a new user
		$("#new-user-user-name").sendKeys("username3");
		$("#new-user-first-name").sendKeys("firstname3");
		$("#new-user-last-name").sendKeys("lastname3");
		$("#new-user-password").sendKeys("password3");
		$("#new-user-phone").sendKeys("phone3");
		$("#new-user-email").sendKeys("email3");
		$("#new-user-submit").click();

		// Make sure we're now on the users page again
		$("#users-wrapper").should(appear);

		// Now there should be three Users
		$$("[data-user-display]").shouldHave(size(3));

		refresh();

		// Now there should be three Users again after the refresh
		$$("[data-user-display]").shouldHave(size(3));

		// Check that the data is showing up for the third User
		long thirdUserId = secondUserId + 1;
		$("#user-" + thirdUserId + "-user-name").shouldHave(text("username3"));
		$("#user-" + thirdUserId + "-full-name").shouldHave(text("firstname3 lastname3"));

		/////////////////////////////
		// TESTING DELETE
		// Test Deleting the first user
		$("#user-" + firstUserId + "-user-name").should(exist);
		$$("[data-user-display]").shouldHave(size(3));

		$("#delete-user-" + firstUserId).click();
		$("#user-" + firstUserId).shouldNot(exist);

		$$("[data-user-display]").shouldHave(size(2));

		/////////////////////////////
		// TEST HTTP CALLS
		// Test get users - only 2nd and 3rd users remain
		when()
				.get("http://localhost:8080/api/users")
				.then()
				.statusCode(is(200))
				.and()
				.body(containsString("username2"))
				.and()
				.body(containsString("firstname2"));

		// Test get just the second user
		when()
				.get("http://localhost:8080/api/users/" + secondUser.getId())
				.then()
				.statusCode(is(200))
				.body(containsString("username2"))
				.body(containsString("firstname2"));

		// Test updating the second user
		Map<String, String> updatedPerson = new HashMap<>();
		updatedPerson.put("userName", "CUTIE");
		updatedPerson.put("firstName", "John");
		updatedPerson.put("lastName", "Doe");
		updatedPerson.put("password","mystery");
		updatedPerson.put("phone","111-111-1111");
		updatedPerson.put("email","john@doe.com");

		given()
				.contentType(JSON)
				.body(updatedPerson).
				when()
				.patch("http://localhost:4200/api/users/" + secondUser.getId()).
				then()
				.statusCode(is(200))
				.and()
				.body("userName", equalTo("CUTIE"))
				.and()
				.body("firstName", equalTo("John"))
				.and()
				.body("lastName", equalTo("Doe"))
				.and()
				.body("password", equalTo("mystery"))
				.and()
				.body("phone", equalTo("111-111-1111"))
				.and()
				.body("email", equalTo("john@doe.com"));

		// Test delete - the second user
		when()
				.delete("http://localhost:8080/api/users/" + secondUser.getId())
				.then()
				.statusCode(is(200));
		// now only the third user remains

	}


}
