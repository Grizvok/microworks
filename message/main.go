package main

import (
	"io/ioutil"

	"github.com/gin-gonic/gin"
)

func HomeGetHandler(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Hello GET from home",
	})
}

func HomePostHandler(c *gin.Context) {
	body := c.Request.Body
	value, err := ioutil.ReadAll(body)
	if err != nil {
		c.JSON(400, gin.H{
			"error": err.Error(),
		})
	}

	c.JSON(200, gin.H{
		"message": string(value),
	})
}

func QueryStrings(c *gin.Context) {
	name := c.Query("name")
	age := c.Query("age")

	c.JSON(200, gin.H{
		"name": name,
		"age":  age,
	})
}

func RouteParameters(c *gin.Context) {
	game := c.Param("game")
	platform := c.Param("platform")

	c.JSON(200, gin.H{
		"game":     game,
		"platform": platform,
	})
}

func main() {
	r := gin.Default()

	r.GET("/", HomeGetHandler)
	r.GET("/query", QueryStrings)
	r.GET("/route/:game/:platform", RouteParameters)
	r.POST("/", HomePostHandler)
	r.Run() // listen and serve on 0.0.0.0:8080
}
