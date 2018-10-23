 
 import {Container, Content, Form, Label, Item, Input, Button } from 'react-base';

 <Container style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input 
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>

            <Button
              full
              rounded
              success
            >
              <Text>
                Login
              </Text>
            </Button>
          </Form>
        </Container>  