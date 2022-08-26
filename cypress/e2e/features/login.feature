@login
Feature: Login Feature

    Scenario: Login With Valid Data
        Given Open SehatQ login page
        When User login with email 'jiungkuy@gmail.com' and password 'Coba@123'
        Then Login Success

    Scenario Outline: Login With Invalid Data <case>
        Given Open SehatQ login page
        When User login with email '<email>' and password '<password>'
        Then Show message error '<message>'
        Examples:
            | case              | email     | password | message                            |
            | Invalid Email     | testdulu  | 123456   | Email harus diisi dengan benar     |
            | invalid Password  | testdulu  | 123      | Kolom Password minimal 6           |
            
    Scenario: Login With Invalid Data Blank Password
        Given Open SehatQ login page
        When User login with email 'jiungkuy@gmail.com' and blank password
        Then Show message error 'Password wajib diisi'