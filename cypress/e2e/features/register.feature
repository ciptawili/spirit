@register
Feature: Register Feature

    Scenario: Register With Valid Data
        Given Open SehatQ register page
        When User register with valid data
        Then Success register

    Scenario Outline: Register Invalid With <case>
        Given Open SehatQ register page
        When User register with data name '<name>', email '<email>', password '<password>'
        Then Show message error "<message>"
        Examples:
            | case                  | name          | email             | password   |   message     |
            | Invalid Name          | 123           | test@gmail.com    | 123456     | Nama lengkap harus diisi dengan huruf.         |
            | Invalid Email         | Automation    | testgmail         | 123456     | Email harus diisi dengan benar.  |
            | Invalid Password      | Automation    | test@gmail.com    | 123        | Password harus diisi minimal 6   |
            | Email Registered      | Automation    | jiungkuy@gmail.com    | 123456 | Email sudah ada, mohon gunakan email lain  |
                                                         

